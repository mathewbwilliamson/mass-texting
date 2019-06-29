import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`

const Form = styled.form`
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
    background: rgba(0, 0, 0, 0.02);
    border: 5px solid white;
    padding: 20px;
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
        align-self: flex-start;
        display: block;
        margin-bottom: 1rem;
        margin-top: 1.5rem;
    }
    input,
    textarea,
    select {
        width: 100%;
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid black;
        &:focus {
            outline: 0;
            border-color: ${props => props.theme.primaryVariantLight};
        }
    }
    label div {
        display: flex;
        align-items: center;
    }

    .required {
        font-size: 0.9rem;
        padding-left: 5px;
        vertical-align: center;
    }

    .no-error {
        display: none;
    }

    .has-error{
        display: block;
        margin-top: -3px;
        font-size: 0.9rem;
        padding-left: 5px;
        color: #8b0000;
    }

    button,
    input[type='submit'] {
        width: auto;
        background: ${props => props.theme.primary};
        color: ${props => props.theme.onPrimary};
        border: 0;
        font-size: 2rem;
        font-weight: 600;
        padding: 0.5rem 1.2rem;

        &:disabled {
            opacity: 0.2;
        }
    }
    fieldset {
        border: 0;
        padding: 0;
        width: 50%;

        &[disabled] {
            opacity: 0.5;
        }
        &::before {
            height: 10px;
            content: '';
            display: block;
            background-image: linear-gradient(
                to right,
                ${props => props.theme.primaryVariantLight} 0%,
                ${props => props.theme.primaryVariantDark} 50%,
                ${props => props.theme.primaryVariantLight} 100%
            );
        }
        &[aria-busy='true']::before {
            background-size: 50% auto;
            animation: ${loading} 0.5s linear infinite;
        }
        @media screen and (max-width: 600px){
            width: 100%;
            
            input, textarea {
                width: 93%;
            }
        }
    }

    @media screen and (max-width: 600px) {
        text-align: center;
        
        textarea {
            height: 100px;
        }
    }
`

export default Form
