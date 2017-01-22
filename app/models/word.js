'use strict'

/**
 * Words
 *
 * @module      :: Model
 * @description :: Contain database structure
 *
 * Module dependencies
 */

const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

/**
 * Words schema
 */

const WordSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

/**
 * Methods
 */

WordSchema.method({});

/**
 * Statics
 */

WordSchema.static({});


mongoose.model('Word', WordSchema);