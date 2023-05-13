import styled from 'styled-components';
// import { clearAllUsers } from '../store/Slices/UserSlice';
import { useDispatch } from 'react-redux';
import '../index.css';
import { clearAllUsers } from '../store/Action/Action';



const DeleteAlluser = () => {
	// this is for boiler
	const dispatch = useDispatch();

	const deleteAllUser = () => {
		dispatch(clearAllUsers());
	};
	return (
		<Wrapper>
			<button className="delete" onClick={deleteAllUser}>
				Delete All User
			</button>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.delete {
        text-transform: capitalize;
		background-color: #db338a;
		margin-top: 2rem;
		
	}
`;

export default DeleteAlluser;
