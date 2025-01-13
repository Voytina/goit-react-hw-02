export default function Feedback ({total,item:{bad,good,neutral}}){

    const percentagePositiveReviews = Math.round((good  / total) * 100);

    return (
        <div>
            <p>Good : {good}</p>
            <p>Neutral : {neutral}</p>
            <p>Bad : {bad}</p>
            <p>Total : {total}</p>
            <p>Positive : {percentagePositiveReviews} %</p>
        </div>
    )

}