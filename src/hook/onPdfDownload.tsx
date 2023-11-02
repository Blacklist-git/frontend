import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

// 다운받기 원하는 엘리먼트에 id를 지정해준다.
export default function onPdfDownload(
  rootElementId: any,
  downloadFileName: any,
) {
  const input = document.getElementById(rootElementId);
  if (input)
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pageHeight = 295;
      let heightLeft = imgHeight;
      let position = 0;
      heightLeft -= pageHeight;
      pdf.addImage(imgData, "JPEG", 0, 10, imgWidth, imgHeight);
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save(`${downloadFileName}.pdf`);
    });
}
