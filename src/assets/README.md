# 規範  

不使用高深的技巧、直覺的寫法、減少依賴為最高原則，  
達成方便維護、交接、提升容錯。  



# 檔案、管理與 Cascade Layers  

## CSS Variables & CSS Nesting  

為了降低依賴 SASS/SCSS 且只支援於主流現代瀏覽器，使用純 CSS 編寫，  
搭配 CSS Variables 與 使用巢狀寫法方便維護。  


## CSS Cascade Layers  
使用 Cascade Layers 輔助權重區別。  
@layer reset, ui, vendor, variations, utilities, print;  
基本概念為絕對不能被覆蓋掉的樣式放後面圖層。  

一般被視為 global 的 css，請寫入 ui.css 或 @import 到 ui layer。  


## Components  

Component 一般來說是不應該被更動且獨立的，所以 Component 的 css 應該被放入到 /components 自己的檔案或資料夾裡，非必要請不要建立一個 components 的＠layer。  
除非是打包時，Component 裡的 CSS 沒有應用到，這時才把它搬到 ＠layer(components)。  

另外如果可以的話，Component 的 CSS Variables 加上預設值，以防沒有設定 CSS Variables，  
也就是說，Component 的 CSS Variables 預設值，避免再使用 CSS Variables 代替，才能達到獨立性以及重用性。  
例如：請寫 color: var(--color, red); 不要寫 color: var(--color, var(--color-default));  


## 第三方 CSS  

如果不想修改原始檔但想方便覆蓋第三方的 css，請建立一個檔案並 @import 放入 vendor layer 中，  
如果需要修改原始檔，則請複製貼上 第三方 css 至 vendor.css 裡修改。  


## 修改第三方 CSS  
variations 則是可以放入客製化、修改後的 css，例如您想改變一個第三方的樣式。  


## 單一最小單位：html tag 或 簡單的 CSS 屬性  
utilities 為最小單位，基本都只有一個 css 屬性，因為其絕對不能再被覆蓋的特性，所以排在最後面，優先權較高。  


## 列印  
print 因為是獨立且不可被覆蓋，所以也是放後面。  



# 顏色  

使用 CSS Color Module level 4 的 oklch(x% x.x x.x / x%)，accessibility 更好。  
若瀏覽器支援 CSS Color Module level 5，則可能可以進一步使用 oklch(from x% x.x x.x l c h / x%) 計算與變化顏色（將需要調整的數值，取代 l、c、h 字母的）以及在 oklch 裡使用 HEX，例如 oklch(#bbb)，  
可以更方便統一管理顏色（到時需要更改 CSS 顏色變數值以及寫法修正），  
建議在 Component 裡的 CSS Variables 預設值，也使用 CSS Variables 方式管理，  
但目前在 CSS Variables 裡，只會寫 x% x.x x.x，這是因為 CSS Color Module level 5 還沒有獲得普遍支援，  
也許現在會有點困擾，但為了日後銜接順利，建議大家遵守規範。  



# CSS 註解 Style  

/*************************  
  區塊說明  
*************************/  
空一行  
.selector {  
  .selector {  
  }  
  .selector {  
  }  
}  
空一行  
.selector {  
  .selector {
  }
  .selector {
  }
}
空一行
空一行
/*************************
  區塊說明
*************************/
空一行
...



# 特別注意  

因為 @media 不能使用 CSS Variables，故 breakpoint 請至 variables.css 裡參照使用真正的數值。  
通常 breakpoint 也不太會變，所以可以就先這樣處理即可。  