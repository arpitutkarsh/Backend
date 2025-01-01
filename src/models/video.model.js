import mongoose, { Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
    {
        videoFile: {
            type: String,
            required: [true, 'Can not proceed without video'],  //we can also write required: true
        },
        thumbnail: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }


    },
    {timestamps: true}
)
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema)

//mongoose-aggregate-paginate-v2 is a package that helps us to paginate our data which means that we can limit the number of data that we want to display on a page. It is a very useful package when we are working with a large amount of data. Aggregate means that we can perform operations on our data like grouping, sorting, etc
//npm install mongoose-aggregate-paginate-v2
//mongoose-aggregate-paginate is here used for watchHistory in user.model.js file as it would have a large amount of data and we would want to paginate it