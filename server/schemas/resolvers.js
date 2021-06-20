const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { sign } = require('jsonwebtoken');

const resolvers = {
    Query: {
        // user by username //
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({})
                .select('-__v -password')
                .populate('books')
                return userData;
            }
            throw new AuthenticationError('Not Logged In')
        },
    },
    Mutation: {
        addUser: async (user, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return {token, user};
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});
            if (!user) {
                throw new AuthenticationError('Credentials Are Incorrect');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Credentials Are Incorrect');
            }
            const token = signToken(user);
            return {token, user};
        },
        saveBook: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: args.input } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('Must be logged in');
        },
        removeBook: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId: args.bookId } } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('Must be logged in')
        }
    }
}

module.exports = resolvers;