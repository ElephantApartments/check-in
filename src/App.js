import React from "react";
import "./index.css";
import logo from "./logo.jpg";

const apartments = [
  { name: "Alsenplatz 13", url: "https://monteurwohnung-neumuenster.com/alsenplatz-13/" },
  { name: "Altonaer Strasse 35A", url: "https://monteurwohnung-neumuenster.com/altonaer-strasse-35a/" },
  { name: "Am Sander 10 Eg", url: "https://monteurwohnung-neumuenster.com/am-sander-10-eg/" },
  { name: "Am Sander 10 Og", url: "https://monteurwohnung-neumuenster.com/am-sander-10-og/" },
  { name: "Anscharstrasse 48 Whg 1", url: "https://monteurwohnung-neumuenster.com/anscharstrasse-48-eg/" },
  { name: "Anscharstrasse 48 Whg 2", url: "https://monteurwohnung-neumuenster.com/anscharstrasse-48-og/" },
  { name: "Anscharstrasse 52", url: "https://monteurwohnung-neumuenster.com/anscharstrasse-52/" },
  { name: "Christianstrasse 61", url: "https://monteurwohnung-neumuenster.com/christianstrasse-61/" },
  { name: "Dorfstrasse 22 Whg 1", url: "https://monteurwohnung-neumuenster.com/dorfstrasse-22-links-2/" },
  { name: "Dorfstrasse 22 Whg 2", url: "https://monteurwohnung-neumuenster.com/dorfstrasse-22-rechts/" },
  { name: "Dorfstrasse 4 Whg 4", url: "https://monteurwohnung-neumuenster.com/dorfstrasse-4-dg/" },
  { name: "Dorfstrasse 4 Whg 1", url: "https://monteurwohnung-neumuenster.com/dorfstrasse-4-eg-hinten/" },
  { name: "Dorfstrasse 4 Whg 2", url: "https://monteurwohnung-neumuenster.com/dorfstrasse-4-eg-klein/" },
  { name: "Dorfstrasse 4 Whg 3", url: "https://monteurwohnung-neumuenster.com/dorfstrasse-4-og/" },
  { name: "Edendorferstrasse 49", url: "https://monteurwohnung-neumuenster.com/edendorferstrasse-49/" },
  { name: "Ehndorfer Strasse 16 W8 Dg Rechts", url: "https://monteurwohnung-neumuenster.com/ehndorfer-strasse-16-w8-dg-rechts/" },
  { name: "Frankenstrasse 13", url: "https://monteurwohnung-neumuenster.com/frankenstrasse-13/" },
  { name: "Friedrichstrasse 42 Whg 1", url: "https://monteurwohnung-neumuenster.com/friedrichstrasse-42-eg/" },
{ name: "Friedrichstrasse 42 Whg 2", url: "https://monteurwohnung-neumuenster.com/friedrichstrasse-42-og/" },
{ name: "Friedrichstrasse 8 Whg 1", url: "https://monteurwohnung-neumuenster.com/friedrichstrasse-8-whg-1/" },
{ name: "Friedrichstrasse 8 Whg 2", url: "https://monteurwohnung-neumuenster.com/friedrichstrasse-8-whg-2/" },
{ name: "Friedrichstrasse 8 Whg 3", url: "https://monteurwohnung-neumuenster.com/friedrichstrasse-8-whg-3/" },
{ name: "Friedrichstrasse 8 Whg 4", url: "https://monteurwohnung-neumuenster.com/friedrichstrasse-8-whg-4/" },
{ name: "Friedrichstrasse 8 Whg 5", url: "https://monteurwohnung-neumuenster.com/friedrichstrasse-8-whg-5/" },
{ name: "Friedrichstrasse 8 Whg 6", url: "https://monteurwohnung-neumuenster.com/friedrichstrasse-8-whg-6/" },
{ name: "Fuhrkamp 74", url: "https://monteurwohnung-neumuenster.com/fuhrkamp-74/" },
{ name: "Gutenbergstrasse 13", url: "https://monteurwohnung-neumuenster.com/gutenbergstrasse-13/" },
{ name: "Hansaring 11 Whg 2", url: "https://monteurwohnung-neumuenster.com/hansaring-11-1-og/" },
{ name: "Hansaring 11 Whg 3", url: "https://monteurwohnung-neumuenster.com/hansaring-11-2-og-links/" },
{ name: "Hansaring 11 Whg 4", url: "https://monteurwohnung-neumuenster.com/hansaring-11-2-og-rechts/" },
{ name: "Hansaring 11 Whg 1", url: "https://monteurwohnung-neumuenster.com/hansaring-11-eg/" },
{ name: "Ilsahl 19", url: "https://monteurwohnung-neumuenster.com/ilsahl-19/" },
{ name: "Johannisstrasse 1 Whg 1", url: "https://monteurwohnung-neumuenster.com/johannisstrasse-1-whg-1/" },
{ name: "Johannisstrasse 1 Whg 2", url: "https://monteurwohnung-neumuenster.com/johannisstrasse-1-whg-2/" },
{ name: "Johannisstrasse 1 Whg 3", url: "https://monteurwohnung-neumuenster.com/johannisstrasse-1-whg-3/" },
{ name: "Johannisstrasse 1 Whg 4", url: "https://monteurwohnung-neumuenster.com/johannisstrasse-1-whg-4/" },
{ name: "Johannisstrasse 1 Whg 5", url: "https://monteurwohnung-neumuenster.com/johannisstrasse-1-whg-5/" },
{ name: "Johannisstrasse 4", url: "https://monteurwohnung-neumuenster.com/johannisstrasse-4/" },
{ name: "Juliusstrasse 10A Whg 3", url: "https://monteurwohnung-neumuenster.com/juliusstrasse-10a-dg/" },
{ name: "Juliusstrasse 10A Whg 1", url: "https://monteurwohnung-neumuenster.com/juliusstrasse-10a-eg/" },
{ name: "Juliusstrasse 10A Whg 2", url: "https://monteurwohnung-neumuenster.com/juliusstrasse-10a-og/" },
{ name: "Juliusstrasse 10A Whg 2+3", url: "https://monteurwohnung-neumuenster.com/juliusstrasse-10a-ogdg/" },
{ name: "Kieler Strasse 73 Whg 1", url: "https://monteurwohnung-neumuenster.com/kieler-strasse-73-whg-1/" },
{ name: "Kieler Strasse 73 Whg 2", url: "https://monteurwohnung-neumuenster.com/kieler-strasse-73-whg-2/" },
{ name: "Kieler Strasse 73 Whg 3", url: "https://monteurwohnung-neumuenster.com/kieler-strasse-73-whg-3/" },
{ name: "Kieler Strasse 73 Whg 4", url: "https://monteurwohnung-neumuenster.com/kieler-strasse-73-whg-4/" },
{ name: "Kieler Strasse 73 Whg 5", url: "https://monteurwohnung-neumuenster.com/kieler-strasse-73-whg-5/" },
{ name: "Kieler Strasse 73 Whg 6", url: "https://monteurwohnung-neumuenster.com/kieler-strasse-73-whg-6/" },
{ name: "Kieler Strasse 76", url: "https://monteurwohnung-neumuenster.com/kieler-strasse-76/" },
{ name: "Lessingstrasse 13", url: "https://monteurwohnung-neumuenster.com/lessingstrasse-13/" },
{ name: "Linzer Weg 127O", url: "https://monteurwohnung-neumuenster.com/linzer-weg-127o/" },
{ name: "Luisenstrasse 20 Whg 1", url: "https://monteurwohnung-neumuenster.com/luisenstrasse-20/" },
{ name: "Luisenstrasse 20 Whg 3 ", url: "https://monteurwohnung-neumuenster.com/luisenstrasse-20-w2-dg-links/" },
{ name: "Luisenstrasse 20 Whg 2 ", url: "https://monteurwohnung-neumuenster.com/luisenstrasse-20-w2-dg-rechts/" },
{ name: "Luisenstrasse 20 Whg 4 ", url: "https://monteurwohnung-neumuenster.com/luisenstrasse-20-w4-hh-eg-links/" },
{ name: "Luisenstrasse 20 Whg 5", url: "https://monteurwohnung-neumuenster.com/luisenstrasse-20-w5-hh-eg-rechts/" },
{ name: "Medusastrasse 22 Whg 1 ", url: "https://monteurwohnung-neumuenster.com/medusastrasse-22-w1-eg-links/" },
{ name: "Medusastrasse 22 Whg 4", url: "https://monteurwohnung-neumuenster.com/medusastrasse-23/" },
{ name: "Ploener Strasse 173", url: "https://monteurwohnung-neumuenster.com/ploener-strasse-173/" },
{ name: "Ploener Strasse 59 Whg 1", url: "https://monteurwohnung-neumuenster.com/ploener-strasse-59-whg-1/" },
{ name: "Ploener Strasse 59 Whg 2", url: "https://monteurwohnung-neumuenster.com/ploener-strasse-59-whg-2/" },
{ name: "Rendsburgerstrasse 161", url: "https://monteurwohnung-neumuenster.com/rendsburgerstrasse-161/" },
{ name: "Ringstrasse 15 Whg 1 - 2 Og", url: "https://monteurwohnung-neumuenster.com/ringstrasse-15-2-og/" },
{ name: "Ringstrasse 15 Whg 2 - 3 Og", url: "https://monteurwohnung-neumuenster.com/ringstrasse-15-3-og/" },
{ name: "Ringstrasse 37 Whg 1", url: "https://monteurwohnung-neumuenster.com/ringstrasse-37-whg-1/" },
{ name: "Ringstrasse 37 Whg 2", url: "https://monteurwohnung-neumuenster.com/ringstrasse-37-whg-2/" },
{ name: "Ringstrasse 37 Whg 3", url: "https://monteurwohnung-neumuenster.com/ringstrasse-37-whg-3/" },
{ name: "Ringstrasse 37 Whg 4", url: "https://monteurwohnung-neumuenster.com/ringstrasse-37-whg-4/" },
{ name: "Ringstrasse 37 Whg 5", url: "https://monteurwohnung-neumuenster.com/ringstrasse-37-whg-5/" },
{ name: "Sachsenring 85", url: "https://monteurwohnung-neumuenster.com/sachsenring-85/" },
{ name: "Soerensenstrasse 18 1 Z", url: "https://monteurwohnung-neumuenster.com/soerensenstrasse-18-1-z/" },
{ name: "Soerensenstrasse 18 3 Z", url: "https://monteurwohnung-neumuenster.com/soerensenstrasse-18-3-z/" },
{ name: "Toenniesstrasse 6", url: "https://monteurwohnung-neumuenster.com/toenniesstrasse-6/" },
{ name: "Wasbeker Strasse 65 Whg 3", url: "https://monteurwohnung-neumuenster.com/wasbeker-strasse-65-links/" },
{ name: "Wasbeker Strasse 65 Whg 2", url: "https://monteurwohnung-neumuenster.com/wasbeker-strasse-65-mitte/" },
{ name: "Wasbeker Strasse 65 Whg 1", url: "https://monteurwohnung-neumuenster.com/wasbeker-strasse-65-rechts/" },
{ name: "Wasbeker Strasse 65 Whg 4", url: "https://monteurwohnung-neumuenster.com/wasbeker-strasse-65-wohnung-4/" },
{ name: "Wilhelmstrasse 19 Whg 3", url: "https://monteurwohnung-neumuenster.com/wilhelmstrasse-19-1og-r/" },
{ name: "Wilhelmstrasse 19 Whg 4", url: "https://monteurwohnung-neumuenster.com/wilhelmstrasse-19-dg/" },
{ name: "Wilhelmstrasse 19 Whg 5", url: "https://monteurwohnung-neumuenster.com/wilhelmstrasse-19-dg-rechts/" },
{ name: "Wilhelmstrasse 19 Whg 1", url: "https://monteurwohnung-neumuenster.com/wilhelmstrasse-19-eg-l/" },
{ name: "Wilhelmstrasse 19 Whg 2", url: "https://monteurwohnung-neumuenster.com/wilhelmstrasse-19-eg-r/" },,
{ name: "Wippendorfstrasse 1", url: "https://monteurwohnung-neumuenster.com/wippendorfstrasse-1/" }


];

export default function ApartmentList() {
  return (
    <div className="App">
      <img src={logo} alt="Logo" className="logo-small" />
      <h1 className="title">Wohnungsübersicht</h1>
      <div className="apartment-grid">
        {apartments.map((apt, index) => (
          <a
            key={index}
            href={apt.url}
            target="_blank"
            rel="noopener noreferrer"
            className="apartment-card"
          >
            <div className="apartment-name">{apt.name}</div>
            <div className="apartment-link">Zur Check-In-Seite</div>
          </a>
        ))}
      </div>
    </div>
  );
}
