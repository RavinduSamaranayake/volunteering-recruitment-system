export interface Table {
    name: String; 
    title: String;
    description: String;
    date: req.body.date,
    attendees: req.body.attendees,
    rating: req.body.rating,
    image: req.body.image,
    organization: req.body.organization
}
