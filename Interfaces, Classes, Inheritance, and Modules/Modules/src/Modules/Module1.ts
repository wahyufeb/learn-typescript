export class Module1 {
  print(text: string): void {
    printText(text);
  }
}

const printText = (text: string): void => {
  console.log(`Module1 with function print called with value : ${text}`);
};

export function exportText(text: string): void {
  console.log(`exportText function called with value : ${text}`);
}
