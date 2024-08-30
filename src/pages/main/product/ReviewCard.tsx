/* eslint-disable @typescript-eslint/no-explicit-any */

const ReviewCard = ({ review }: any) => {
    // console.log(review, "review card")

    return (
        <div key={review?._id} className="bg-white p-4 rounded-lg">
            <p className="font-semibold">{review?.name}</p>
            <p className="text-yellow-500">{'★'?.repeat(review?.rating)}</p>
            <p className="text-green-900">{review?.comment}</p>
        </div>
    )
}

export default ReviewCard;