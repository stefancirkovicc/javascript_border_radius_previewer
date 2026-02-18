Border Radius Previewer

Interactive web tool for visualizing and generating CSS border-radius values.

This project allows users to adjust horizontal and vertical radius values for each corner and instantly preview the result.

Features

Live preview of border radius changes

Supports horizontal and vertical radius values

Generates valid CSS border-radius syntax

One-click copy to clipboard

Real-time updates using JavaScript

Clean and minimal UI

How It Works

Users can adjust 8 input values:

Top Left (Horizontal & Vertical)

Top Right (Horizontal & Vertical)

Bottom Right (Horizontal & Vertical)

Bottom Left (Horizontal & Vertical)

The script dynamically builds the CSS rule:

border-radius: horizontal-values / vertical-values;


If all vertical values are 0, it generates the simplified version:

border-radius: 10px 20px 30px 40px;


The generated CSS is displayed and can be copied with a single click.

Technologies Used

HTML

CSS

Vanilla JavaScript

No frameworks or libraries were used.

How to Run

Simply open index.html in your browser.

No installation or server required.

What This Project Demonstrates

DOM manipulation

Event listeners

Dynamic style updates

Conditional CSS generation

Clipboard API usage

Clean UI structure

Author

Stefan Cirkovic
