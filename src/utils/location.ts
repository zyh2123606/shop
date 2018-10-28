
import Taro, { Component, Config } from '@tarojs/taro'
class LocationServices{

  public getLocation=()=>{
   return Taro.getLocation({type:'wgs84'})
  }

}
  export default new LocationServices()
