/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class ProfileView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        h2{
          font-size: 16px; 
        }
        ul{
          list-style: none;
          padding-left: 20px;
        }
      </style>

      <div class="card">
        <h1>古川 俊太 ( ふるかわ しゅんた ) </h1>
        <ul> 
          <li> デザイナー </li> 
          <li> アートディレクター </li> 
          <li> フロントエンドエンジニア </li> 
          <li> プロダクトディレクター </li>
        </ul>
        <h2> 学歴 </h2> 
        <ul> 
        <li>平成13年 4月 私立慶應義塾高等学校 入学 </li>
        <li>平成16年 4月 慶應義塾大学 環境情報学部 入学 </li>
        <li>平成20年 9月 慶應義塾大学 環境情報学部 卒業 </li>
        <li>平成25年 9月 慶應義塾大学 システムデザイン・マネジメント研究科 入学 </li>
        <li>平成26年 2月 スイス連邦工科大学チューリッヒ校へ交換留学 〜6月まで </li>
        <li>平成27年 9月 慶應義塾大学 システムデザイン・マネジメント研究科 卒業 </li>
        </ul>
        <h2> 職歴 </h2> 
        <ul>
        <li> 平成21年 4月 株式会社ウェブテクノロジー 入社 </li>
        <li> 平成21年 12月 株式会社ウェブテクノロジー 退社 </li>
        <li> 平成21年 12月 株式会社パンカク 入社 </li>
        <li> 平成25年 4月 株式会社パンカク 退社 </li>
        <li> 平成27年 10月 株式会社NTTドコモ 入社 </li>
        <li> 平成30年 8月 株式会社NTTドコモ 在職中 </li>
        </ul>

      </div>
    `;
  }
}

window.customElements.define('profile-view', ProfileView);
