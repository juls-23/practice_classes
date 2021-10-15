'use strict'

class RangeValidator{
  /**
   * 
   * @param {number} from 
   * @param {number} to 
   */
  constructor(from,to){
    this.from = from;
    this.to = to;
  }

  get from(){
    return this._from;
  } 
  
  set from(from){
    if(typeof from !== 'number'){
      throw new TypeError('must be a number')
    }
    if(from>=this.to){
      throw new RangeError('must be lower then to')
    } 
    return this._from = from;
  }

  get to(){
    return this._to;
  }

  set to(to){
    if(typeof to !== 'number'){
      throw new TypeError('must be a number')
    }
    if(to<=this.from){
      throw new RangeError('must be higher then from')
    } 
    return this._to = to;
  }

  get range(){
    return [this.from,this.to]
  }

  validate(num){
    if(typeof num !== 'number'){
      throw new TypeError('must be a number')
    }
    if(num>=this.from && num<=this.to){
      return num
    }  else{
      throw new RangeError('Invalid number')
    }
  }
}


const validateNum = new RangeValidator(3,90)
