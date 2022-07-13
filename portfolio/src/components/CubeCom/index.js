import * as React from 'react';
import './style.css'
import Cube from 'react-3d-cube';

const CubeCom = ({front, right, back, left, top, bottom}) => {
     return <>
     <center>
            <div>
                <div
                    style={{
                        width: 300,
                        height: 300
                    }}
                >
                <Cube size={300} index="front">
                <div id='cube-front'>{front}</div>
                <div id='cube-right'>{right}</div>
                <div id='cube-back'>{back}</div>
                <div id='cube-left'>{left}</div>
                <div id='cube-top'>{top}</div>
                <div id='cube-bottom'>{bottom}</div>
                </Cube>
                </div>
            </div>
        </center>
     </>
    
}

export default CubeCom
