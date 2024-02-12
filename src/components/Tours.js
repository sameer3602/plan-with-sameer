import Card from "./Card";
function Tours({tours,removetour}){
    return (
        <div className="container-tour">
            <h2 className="Heading"> Plan With Sameer</h2>
            <div className="Create-cards">
                {tours.map( (tour) =>{
                    return <Card key={tour.id} {...tour} removetour={removetour} ></Card>
                    })
                }
            </div>
        </div>
);
}
export default Tours;