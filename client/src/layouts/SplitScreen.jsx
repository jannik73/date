import styled from "styled-components";

const Header = styled.div`
justify-content: center;
`;

const Container = styled.div`
    display: flex;
`;

const Pane = styled.div`
    flex: ${props => props.weight};
`;

export const SplitScreen = ({
    children,
    leftWeight = 1,
}) => {
    const [top, left] = children;
    return (
        <div>
            <Header>
                {top}
            </Header>
            <Container>
            <Pane weight={leftWeight}>
                {left}
            </Pane>
        </Container>
        </div>
        
    )
}