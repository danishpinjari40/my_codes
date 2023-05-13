import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { MdDeleteForever } from 'react-icons/all.js';
import { removeUser } from '../store/Slices/UserSlice';

const DisplayUsers = () => {
// this is for boiler 
const dispatch = useDispatch();

	// Accessing User Data
	const data = useSelector((state) => {
		return state.users;
	});

    // for Delete user data
    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }

	return (
		<Wrapper>
			{data.map((user, id) => {
				return (
					<li key={id}>
						{user}
						<button className="btn-delete"
                        onClick={() => deleteUser(id)}
                        >
							<MdDeleteForever className="delete-icon" />
						</button>
					</li>
				);
			})}
		</Wrapper>
	);
};

const Wrapper = styled.section`
	li {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		border-bottom: lpx solid #eee;

		&:first-child {
			border-top: lpx solid #eee;
		}
	}
	.btn-delete {
		border: none;
		background-color: transparent;
	}
`;

export default DisplayUsers;
