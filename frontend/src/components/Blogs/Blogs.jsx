import React from 'react';
import MetaData from '../MetaData';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card';

const Blogs = () => {
    const data = [
        {
            image: "/assets/content/hekto-blog-post-1.webp",
            alt: "hekto-blog-post-1",
            title: "Mauris at orci non vulputate diam tincidunt nec.",
        },
        {
            image: "/assets/content/hekto-blog-post-2.webp",
            alt: "hekto-blog-post-2",
            title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
        },
        {
            image: "/assets/content/hekto-blog-post-3.webp",
            alt: "hekto-blog-post-3",
            title: "Sit nam congue feugiat nisl, mauris amet nisi.",
        },
    ]
    return (
        <>
            {/* Title tag */}
            <MetaData title={"Blogs: Shop Online in India for Furniture, Home Decor, Homeware Products @Hekto"} />

            <Container>
                <h2 className="font-22 text-primary-color fw-bold my-5">Blogs</h2>
                <hr />
                <Row xs={1} lg={2} className="my-5 justify-content-center g-4">
                    {
                        data.map((item, index) => {
                            return (
                                <Col key={index}>
                                    <Card className="text-decoration-none border-0 card-shadow p-0 font-lato text-center mx-auto mx-md-2">
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + item.image} alt={item.alt} className="card-image m-auto object-fit-contain" />
                                        <Card.Body className="text-dark">
                                            <Card.Title className={`text-overflow fw-bold  my-2`}>{item.title}</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Blogs;
