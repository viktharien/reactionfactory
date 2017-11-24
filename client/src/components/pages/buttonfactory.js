import React from 'react';
import Form from '../elements/factory-form-button';
import DisplayButton from '../elements/displaybutton';

const ButtonFactory = (props) => {

    return (
        <div id='page-factory' className="page">
            <div>
                <Form onChange={props.inputHandler}/>
                <DisplayButton id={'display-button'} onClick={props.pageHandler} value={'Output.click'} state={props.state} text={'Click me to generate your code!'} />
            </div>
      </div>
    );

}

export default ButtonFactory;
