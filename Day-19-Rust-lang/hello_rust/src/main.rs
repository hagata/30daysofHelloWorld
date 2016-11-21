extern crate rand;

use std::io;
use rand::Rng;
use std::cmp::Ordering;

fn main() {
    println!("Hello, Rusty Cargo!");

    let secret_number = rand::thread_rng().gen_range(1,101);
    println!("Secret is {}", secret_number);

    // Infinitely loop the user input guess, until the User wins.
    loop {
        println!("Input your guess.");
        let mut guess = String::new();

        io::stdin().read_line(&mut guess)
            .expect("Failed to read line");

        // convert input guess to u32 for comparison.
        let guess: u32 = guess.trim().parse()
            .expect("Enter a number!");

        println!("you guessed: {}", guess);

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
                },
        }
    }
}