'use strict'

/**
 * User
 *
 * @module      :: Model
 * @description :: represent registered users
 *
 *
 * Module dependencies
 */

const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

/**
 * User schema
 */

const UserSchema = new Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});