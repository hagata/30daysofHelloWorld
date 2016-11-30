//
//  SecondViewController.swift
//  sw-maptest
//
//  Created by Genki Hagata on 11/29/16.
//  Copyright © 2016 Genki Hagata. All rights reserved.
//

import UIKit
import Mapbox

class SecondViewController: UIViewController, MGLMapViewDelegate {

    @IBOutlet var mapView: MGLMapView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        
        mapView.delegate = self
        
        // Set starting default to tenesseeValleyTH
        mapView.latitude = 37.8604099
        mapView.longitude = -122.538485
        
        let tenesseeValleyTH = MGLPointAnnotation()
        tenesseeValleyTH.coordinate = CLLocationCoordinate2D(latitude: 37.8604099, longitude: -122.538485)
        tenesseeValleyTH.title = "Tenessee Valley Trailhead"
        tenesseeValleyTH.subtitle = "591 Tennessee Valley Rd, Mill Valley, CA 94941"
        
        // Add tenesseeValley to the mapview
        mapView.addAnnotation(tenesseeValleyTH)
    }
    
    // Handling tapping on annotations
    func mapView(_ mapView: MGLMapView, annotationCanShowCallout annotation: MGLAnnotation) -> Bool {
        // the map view should always be able to show annotations
        return true
    }
    
    

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

