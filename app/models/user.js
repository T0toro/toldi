'use strict'

/**
 * User
 *
 * @module      :: Model
 * @description :: represent registered users
 */

/**
 * Module variables
 */

var mongoose, Schema, UserSchema;

/**
 * Module dependencies
 */

mongoose = require('mongoose');
Schema   = mongoose.Schema;

/**
 * User schema
 */

UserSchema = new Schema({
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