//
//  tableViewController.swift
//  sw-maptest
//
//  Created by Genki Hagata on 11/29/16.
//  Copyright © 2016 Genki Hagata. All rights reserved.
//

import Foundation
import UIKit



class TableViewController: UITableViewController {

    
    var names = [String]()
    
      override func viewDidLoad() {
        names = ["Marin Headlands", "Redwoods"]
    }
    
     override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return names.count
        
    }
    
     override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        print(names[indexPath.row])

        // Set cell with custom nib (xib)
                let cell = Bundle.main.loadNibNamed("TableViewCell", owner: self, options: nil)?.first as! TableViewCell
        cell.titleLabel.text = names[indexPath.row]
        return cell

// Set cell with reuseable cell
//        let cell = tableView.dequeueReusableCell(withIdentifier: "tableCell")
//        cell?.textLabel?.text = names[indexPath.row]
//        return cell!
    }
    

}
