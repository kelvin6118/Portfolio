import React from 'react';
import "./style.css"

const SoftSkill = ({skill,name}) => {
    return<>
        <div className='SoftSkill'>
            <h4 className='SoftSkill'>{skill}{name}</h4>
        </div>
    </>
}

export default SoftSkill;
