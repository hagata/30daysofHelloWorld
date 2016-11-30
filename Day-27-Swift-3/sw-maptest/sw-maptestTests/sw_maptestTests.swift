//
//  sw_maptestTests.swift
//  sw-maptestTests
//
//  Created by Genki Hagata on 11/29/16.
//  Copyright © 2016 Genki Hagata. All rights reserved.
//

import UIKit
import XCTest
@testable import sw_maptest

class sw_maptestTests: XCTestCase {
    
    override func setUp() {
        super.setUp()
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testExample() {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
    }
    
    func testPerformanceExample() {
        // This is an example of a performance test case.
        self.measure {
            // Put the code you want to measure the time of here.
        }
    }
    
    func testMapClassInitialization() {
        let testMap = Map(name: "testman", lat: 37.8604099, lon: -122.538485)
        XCTAssertNotNil(testMap)
    }
    
}
