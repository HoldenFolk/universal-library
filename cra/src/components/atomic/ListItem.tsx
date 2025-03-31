import React from 'react';
import {
	ListGroup,
	ListGroupProps as ListGroupItemPropsBootstrap,
} from 'react-bootstrap';
import styled from 'styled-components';

interface ListGroupItemProps extends ListGroupItemPropsBootstrap {
	clickable?: boolean;
	isSelected?: boolean;
}

export const ListGroupItem: React.FC<ListGroupItemProps> = ({
	clickable = false,
	isSelected,
	...rest
}) => {
	if (clickable)
		return <ClickableListGroupItem isSelected={isSelected} {...rest} />;
	return <ListGroup.Item {...rest} />;
};

export const ClickableListGroupItem = styled(
	ListGroup.Item,
)<ListGroupItemProps>`
	&:hover {
		cursor: pointer;
		background-color: #ddd;
	}
	background-color: ${props => (props.isSelected ? '#aaa' : '')};
`;

export default ListGroupItem;
