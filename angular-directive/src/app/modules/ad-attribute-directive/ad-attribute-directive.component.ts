import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ad-attribute-directive",
  template: `
    <h4>Attribute directives to handle appearance of elements</h4>

    <div>
      <div>
        <input [(ngModel)]="searchText" type="text" placeholder="Search Text" />
      </div>

      <p class="text-content" appHighlight [highlightText]="searchText">
        Silent sir say desire fat him letter. Whatever settling goodness too and
        honoured she building answered her. Strongly thoughts remember mr to do
        consider debating. Spirits musical behaved on we he farther letters.
        Repulsive he he as deficient newspaper dashwoods we. Discovered her his
        pianoforte insipidity entreaties. Began he at terms meant as fancy.
        Breakfast arranging he if furniture we described on. Astonished
        thoroughly unpleasant especially you dispatched bed favourable. Now for
        manners use has company believe parlors. Least nor party who wrote while
        did. Excuse formed as is agreed admire so on result parish. Put use set
        uncommonly announcing and travelling. Allowance sweetness direction to
        as necessary. Principle oh explained excellent do my suspected conveying
        in. Excellent you did therefore perfectly supposing described. Savings
        her pleased are several started females met. Short her not among being
        any. Thing of judge fruit charm views do. Miles mr an forty along as he.
        She education get middleton day agreement performed preserved unwilling.
        Do however as pleased offence outward beloved by present. By outward
        neither he so covered amiable greater. Juvenile proposal betrayed he an
        informed weddings followed. Precaution day see imprudence sympathize
        principles. At full leaf give quit to in they up. Impossible considered
        invitation him men instrument saw celebrated unpleasant. Put rest and
        must set kind next many near nay. He exquisite continued explained
        middleton am. Voice hours young woody has she think equal. Estate moment
        he at on wonder at season little. Six garden result summer set family
        esteem nay estate. End admiration mrs unreserved discovered comparison
        especially invitation. So feel been kept be at gate. Be september it
        extensive oh concluded of certainty. In read most gate at body held it
        ever no. Talking justice welcome message inquiry in started of am me.
        Led own hearted highest visited lasting sir through compass his. Guest
        tiled he quick by so these trees am. It announcing alteration at
        surrounded comparison. Advanced extended doubtful he he blessing
        together. Introduced far law gay considered frequently entreaties
        difficulty. Eat him four are rich nor calm. By an packages rejoiced
        exercise. To ought on am marry rooms doubt music. Mention entered an
        through company as. Up arrived no painful between. It declared is
        prospect an insisted pleasure. Consider now provided laughter boy
        landlord dashwood. Often voice and the spoke. No shewing fertile village
        equally prepare up females as an. That do an case an what plan hour of
        paid. Invitation is unpleasant astonished preference attachment
        friendship on. Did sentiments increasing particular nay. Mr he recurred
        received prospect in. Wishing cheered parlors adapted am at amongst
        matters.
      </p>
    </div>
  `,
  styles: [],
})
export class AdAttributeDirectiveComponent implements OnInit {
  searchText = "";
  constructor() {}

  ngOnInit(): void {}
}
