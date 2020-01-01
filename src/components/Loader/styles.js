import styled from 'styled-components';

export const LoaderStyle = styled.div`

#loader-wrapper .loader-section {
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 10;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.spinner {
	width: 60px;
	height: 60px;
	border: 6px solid #BDBDBD;
	border-left-color: #E91E63;
	border-radius: 100%;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}
.hide {
    display: none;
}
`;
