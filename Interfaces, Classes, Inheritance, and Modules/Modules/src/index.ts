/**
 * Modules
 * ----------------------------
 * 1. Exporting Modules
 * 2. Importing Modules
 * 3. Module Renaming
 * 4. Multiple Exports
 * 5. Module Namespaces
 * 6. Default Exports
 * ----------------------------
 */

//  (1) Exporting Modules
/**
 * implemented at "./Modules/Module1.ts"
 * Ekspor modul dengan menggunakan kata kunci `export`
 * contoh: ekspor kelas : export class A{}
 * contoh: ekspor fungsi : export function b(){}
 */

//  (2) Importing Modules
/**
 * Impor modul dengan menggunakan kata kunci `import`
 * contoh: import {[nama yang akan diimpor]} from "[sumber file]"
 */

// Impor kelas Module1 dan impor fungsi exportText
import { Module1, exportText } from "./Modules/Module1";
const modul1 = new Module1();
modul1.print("Hello There"); // Result: Module1 with function print called with value : Hello There
exportText("Ola"); // Result:  exportText function called with value : Ola

//  (3) Module Renaming
import { Module1 as MyModule1 } from "./Modules/Module1";
const myModule1 = new MyModule1();
myModule1.print("Hello from Module Renaming");
// Result : Module1 with function print called with value : Hello from Module Renaming

//  (4) Multiple Exports
// implemented at "./Modules/Module2.ts"
import {
  MyMultipleModule2,
  MyMultipleModule3,
} from "./Modules/MultipleExports";
console.log(MyMultipleModule2, MyMultipleModule3);
// Result : [class MyMultipleModule2] [class MyMultipleModule3]

//  (5) Module Namespaces
import * as MultipleExports from "./Modules/MultipleExports";
const kelas1 = new MultipleExports.MyMultipleModule2();
const kelas2 = new MultipleExports.MyMultipleModule3();
console.log(kelas1, kelas2);
// Result : MyMultipleModule2 {} MyMultipleModule3 {}

//  (6) Default Exports
import totalCart from "./Modules/DefaultExport";
const arr1: Array<number> = [10, 20, 50, 20];
const arr2: Array<number> = [120, 80, 200, 50, 150, 300, 100];
console.log(totalCart(arr1)); // Result : 100
console.log(totalCart(arr2)); // Result : 1000
