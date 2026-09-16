# Pre-refactor runtime baseline

Captured by parent before source changes, 2026-09-15, current homepage at http://localhost:5173/ using in-app browser. Viewport height 844px. Values rounded to nearest CSS pixel; scrollbar occupies approximately 15px. Browser font/render rounding tolerances apply. Current implementation is authoritative for this preservation refactor; no Figma redesign.

| Section | 1366 width y / height | 768 width y / height | 390 width y / height | 320 width y / height |
| --- | --- | --- | --- | --- |
| Hero | 0 / 766 | 0 / 734 | 0 / 1154 | 0 / 1258 |
| Statistics | 720 / 142 | 688 / 163 | 1108 / 237 | 1212 / 258 |
| Videos | 916 / 662 | 905 / 929 | 1399 / 1248 | 1524 / 1119 |
| Features | 1578 / 584 | 1834 / 861 | 2647 / 1115 | 2643 / 1323 |
| Products | 2161 / 721 | 2695 / 669 | 3762 / 631 | 3967 / 655 |
| Reasons | 2882 / 749 | 3364 / 1031 | 4392 / 1830 | 4621 / 2034 |
| Growth | 3632 / 538 | 4395 / 538 | 6222 / 984 | 6655 / 984 |
| Roles | 4170 / 649 | 4933 / 857 | 7206 / 1287 | 7639 / 1357 |
| Footer | 4819 / 353 | 5789 / 376 | 8493 / 955 | 8996 / 955 |

At widths 1366/768/390/320, document clientWidth equals scrollWidth: 1351/753/375/305. Desktop growth container is 1300px wide; statistics 1050px; phone statistics width is clientWidth minus 32px.

Typography: desktop h1 46.4576px / 54.82px line-height, weight800; tablet h1 30/35.4; phone h1 28/33.04. Major headings desktop35.5264/44.408, narrower26/32.5; weight800 except reasons and roles use700. Hero intro18/27.9 desktop/tablet and17/26.35 phone, weight600. Hero team15/23.25. Product label headings18/23.4 desktop/tablet,16/20.8 phone, weight900. Reason headings18/25.2, weight600.

Existing functional baseline: local assets/posters, three source-less native video controls awaiting MP4 upload; presentation-only CTAs; six Swiper slides repeating three identities, 3/2/1 visible at1100/640 breakpoints, autoplay3500ms hover pause, arrows and keyboard; 75vw drawer with focus trapping/Escape/outside close and rightward exit, buttons move inside below640; every reason has dark hover/focus; moving CTA gradients; reduced-motion rules. Reuse prior revision-handoff only for unchanged behavior evidence; post-refactor checks remain required.
