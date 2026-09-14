import mongoose from "mongoose";

const workoutExerciseSchema = new mongoose.Schema(
    {
        exercise:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Exercise",
            required: true,

        },
        sets:{
            type: Number,
            required: true,
            min:1,
            default: 3,
        },

        reps:{
            type: Number,
            required: true,
            min:1,
            default: 10,
        },
        weight:{
            type: NUmber,
            default: 0,
            min: 0,

        },

        restTime:{
            type: Number,
            default: 60,
            min: 0,
        },

        notes: {
            type: String,
            default: "",
            trim: true,
        },
    },
    {
        _id: false,
    }
);

const workoutSchema = new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },
        name:{
            type: String,
            required: [true, "workout name is required"],
            trim: true,
            maxlength: 100,
        },

        description:{
            type: String,
            default: "",
            trim: true,
            maxlength: 500,
        },

        category:{
            type: String,
            enum:[
                "Strength",
                "Cardio",
                "HIIT",
                "Flexibility",
                "Mobility",
                "Bodyweight",
                "Full Body",
            ],
            default: "Strength",
        },

        difficulty:{
            type: String,
            enum: ["Beginner", "Intermediate", "Advanced"],
            default: "Beginner",
        },

        exercises:{
            type:[workoutExerciseSchema],
            validate:{
                validator: function(value){
                    return value.length > 0;
                },
                message: "Workout must contain at least one exercise",
            },
        },

        duration:{
            type: Number,
            default: 0,
            min: 0,
        },

        calories:{
            type: Number,
            default: 0,
            min: 0,
        },

        status:{
            type: String,
            enum: ["planned", "in-progress", "completed"],
            default: "planned",
        },
        completedAt:{
            type: Date,
            default:null,
        },

        isFavorite:{
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

export default {"workout": workoutSchema}