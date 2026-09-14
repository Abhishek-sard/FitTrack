import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Exercise name is required"],
            trim: true,
            minlength: 100,
        },

        description:{
            type: String,
            required: [true, "Exercise description is required"],
            trim: true,

        },
        category:{
            type: String,
            required: [true, "Exercise category is required"],
            enum:[
                "Strength",
                "Cardio",
                "Flexibility",
                "HIIT",
                "Mobility",
                "Bodyweight",
            ],
        },
        muscleGroup:{
            type: String,
            required: [true, "Muscle group is required"],
            enum:[
                "Chest",
                "Back",
                "Shoulders",
                "Biceps",
                "Triceps",
                "Legs",
                "Glutes",
                "Core",
                "Full Body",
            ],
        },

        equipment:{
            type: String,
            default: "None",
        },
        difficulty:{
            type: String,
            required: [true, "Difficulty level is required"],
            enum:[
                "Beginner",
                "Intermediate",
                "Advanced",
            ],
            default: "Beginner",
        },

        instructions:{
            type: String,
            default: [],
        },

        sets:{
            type: Number,
            default: 3,
            min:1,
        },

        reps:{
            type: Number,
            default: 10,
            min:1,

        },

        duration:{
            type: Number,
            default: 30,
            min: 0,
        },

        calories:{
            type: Number,
            default: 0,
            min: 0,
        },
        image:{
            type: String,
            default: "",
        },

        video:{
            type: String,
            default: "",
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

    },
    {
        timestamps: true,
    }
);

export default ("Exercise", exerciseSchema);