
//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"


class Maps {
    
    // Need to store coordinates
    //
    var lat: Float32 = 37.8604099
    var lon: Float32 = -122.538485
    var radius: Int = 120
    
    
    init() {
        print("new map set created")
        print(self.lat)
        print(self.lon)
    }
    
    func setAsGlobalView() {
        print("setting as map view")
    }
}


let marinHeadlands = Maps()
marinHeadlands.setAsGlobalView()

let redwoods = Maps()
redwoods.lat = 37.8138864
redwoods.lon = -122.1905302
