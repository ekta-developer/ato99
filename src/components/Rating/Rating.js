import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const Star = styled(FaStar)`
    margin-right: 4px;
`;

const Rating = ({ rating, numofReviews }) => {
    return (
        <Container>
            {[...Array(5)].map((_, index) => (
                <Star
                    key={index}
                    color={index < rating ? "#ffc107" : "rgb(192,192,192)"}
                />
            ))}
            <span className="ms-2">({numofReviews} Reviews)</span>
        </Container>
    );
};

export default Rating;
