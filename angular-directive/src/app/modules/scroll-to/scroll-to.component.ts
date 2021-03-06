import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-scroll-to",
  template: `
    <style>
      .page-links__link {
        margin: 5px;
        border: 1px solid black;
      }
    </style>
    <h4>
      Creating a basic directive that allows you to vertically scroll to an
      element
    </h4>

    <div class="content" role="main">
      <div class="page-links">
        <h4 class="page-links__heading">Links</h4>
        <a class="page-links__link" appScrollTo target="#resources"
          >Resources</a
        >
        <a class="page-links__link" appScrollTo target="#nextSteps"
          >Next Steps</a
        >
        <a class="page-links__link" appScrollTo target="#moreContent"
          >More Content</a
        >
        <a class="page-links__link" appScrollTo target="#furtherContent"
          >Further Content</a
        >
        <a class="page-links__link" appScrollTo target="#moreToRead"
          >More To Read</a
        >
      </div>

      <div class="page-section" id="resources">
        <!-- Resources -->
        <h2>Resources</h2>
        <p>Here are some links to help you get started:</p>

        <div class="card-container">
          <a
            class="card"
            target="_blank"
            rel="noopener"
            href="https://angular.io/tutorial"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
              />
            </svg>

            <span>Learn Angular</span>

            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </a>

          <a
            class="card"
            target="_blank"
            rel="noopener"
            href="https://angular.io/cli"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
              />
            </svg>

            <span>CLI Documentation</span>

            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </a>

          <a
            class="card"
            target="_blank"
            rel="noopener"
            href="https://blog.angular.io/"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"
              />
            </svg>

            <span>Angular Blog</span>

            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </a>
        </div>
      </div>

      <div class="page-section" id="nextSteps">
        <h2>Next Steps</h2>
        <p>What do you want to do next with your app?</p>

        <input type="hidden" #selection />

        <div class="card-container">
          <div
            class="card card-small"
            (click)="selection.value = 'component'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>New Component</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'material'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Angular Material</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'pwa'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Add PWA Support</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'dependency'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Add Dependency</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'test'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Run and Watch Tests</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'build'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Build for Production</span>
          </div>
        </div>
      </div>

      <div class="page-section" id="moreContent">
        <h2>More Content</h2>
        <p>What do you want to do next with your app?</p>

        <input type="hidden" #selection />

        <div class="card-container">
          <div
            class="card card-small"
            (click)="selection.value = 'component'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>New Component</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'material'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Angular Material</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'pwa'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Add PWA Support</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'dependency'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Add Dependency</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'test'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Run and Watch Tests</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'build'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Build for Production</span>
          </div>
        </div>
      </div>

      <div class="page-section" id="furtherContent">
        <h2>Further Content</h2>
        <p>What do you want to do next with your app?</p>

        <input type="hidden" #selection />

        <div class="card-container">
          <div
            class="card card-small"
            (click)="selection.value = 'component'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>New Component</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'material'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Angular Material</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'pwa'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Add PWA Support</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'dependency'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Add Dependency</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'test'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Run and Watch Tests</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'build'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            class="page-section" id="resources">

            <span>Build for Production</span>
          </div>
        </div>
      </div>

      <div class="page-section" id="moreToRead">
        <h2>More To Read</h2>
        <p>What do you want to do next with your app?</p>

        <input type="hidden" #selection />

        <div class="card-container">
          <div
            class="card card-small"
            (click)="selection.value = 'component'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>New Component</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'material'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Angular Material</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'pwa'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Add PWA Support</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'dependency'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Add Dependency</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'test'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Run and Watch Tests</span>
          </div>

          <div
            class="card card-small"
            (click)="selection.value = 'build'"
            tabindex="0"
          >
            <svg
              class="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>

            <span>Build for Production</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ScrollToComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
