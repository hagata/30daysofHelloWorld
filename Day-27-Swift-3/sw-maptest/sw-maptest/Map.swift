//
//  Map.swift
//  sw-maptest
//
//  Created by Genki Hagata on 11/29/16.
//  Copyright © 2016 Genki Hagata. All rights reserved.
//

import UIKit

class Map {
    
    var name: String
    var lat: Double
    var lon: Double
    
    init?(name: String, lat: Double, lon: Double) {
        self.name = name
        self.lat = lat
        self.lon = lon
    
        if(name.isEmpty || lat.isNaN || lon.isNaN) {
            return nil
        }
    }
}
