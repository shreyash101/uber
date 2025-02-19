const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minLength: [3, "Firstname must be atleast 3 chars long"]
        },
        lastname: {
            type: String,
            minLength: [3, "Lastname must be atleast 3 chars long"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        lowercase: true
        // minLength: [5, "Email must be atleast 5 chars long"]
    }, 
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minLength: [3, "Color must be atleast 3 chars long"]
        },
        plate: {
            type: String,
            required: true,
            minLength: [3, "Plate must be atleast 3 chars long"]
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity must be atleast 1"]
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto']
        }
    },
    location: {
        lat: {
            type: Number,
            // enum: ['Point'],
            // default: 'Point'
        },
        lng: {
            type: Number,

        }
    },
})

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {expiresIn: '24h'})
    return token
}

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10)
}

const captainModel = mongoose.model('captain', captainSchema)

module.exports = captainModel