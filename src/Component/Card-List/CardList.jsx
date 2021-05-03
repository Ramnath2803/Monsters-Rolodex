import React from 'react';
import"./CardListstyle.css"

import {Card} from "../Card/card"

export const CardList=(props)=>{
       console.log(props.name);
   
    return (
      <div className="container">      
        <div className="card-list">
          {props.name.map((monster) => (
            <Card key={monster.id} monster={monster}></Card>
          ))}
        </div>
      </div>
    );
}
