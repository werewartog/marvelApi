import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle `
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #000;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px Roboto,  sans-serif;
    }

    .container {
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    button {
        cursor: pointer;
    }

::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #fff;
}

::-webkit-scrollbar
{
	width: 10px;
	background-color: #fff;
}

::-webkit-scrollbar-thumb
{
	background-color: red;
}

`
