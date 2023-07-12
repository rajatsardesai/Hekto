import "./Forbidden.css";
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/esm/Stack'
import Button from 'react-bootstrap/esm/Button';

function Fallback({ error, resetErrorBoundary }) {
    return (
        <Container>
            <Stack className="forbidden-errors justify-content-center align-items-center pb-5 position-relative">
                <img src={process.env.PUBLIC_URL + "/assets/content/hekto-error-vector-404.webp"} alt="hekto-error-vector-404" className="my-5 py-5 img-fluid" />
                <div className="position-absolute top-0 left-0 text-center">
                    <img src={process.env.PUBLIC_URL + "/assets/content/hekto-error-vector.webp"} alt="hekto-error-vector" className="forbidden-errors-img" />
                </div>
                <span className="text-primary-color font-24 fw-bold mb-5 text-center">{error.message}</span>
                <Button onClick={resetErrorBoundary} className="bg-secondary-color border-0 py-2 px-3 rounded-0 text-nowrap me-2 w-auto d-flex justify-content-center align-items-center">Try Again</Button>
            </Stack>
        </Container>
    );
};

export default Fallback;