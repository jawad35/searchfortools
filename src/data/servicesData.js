import { Tag } from "react-feather"
import {
  AiOutlineTags,
  AiOutlineFileSearch,
  AiOutlineMail,
  AiOutlineFileWord,
  AiOutlineQrcode,
  AiOutlineScan
} from "react-icons/ai"
import { TfiYoutube } from "react-icons/tfi"
import { CgTranscript } from "react-icons/cg"
import { GiDuration } from "react-icons/gi"
import { MdImageSearch, MdOutlineTimer } from "react-icons/md"
import { RiImageAddLine } from "react-icons/ri"
import { BsJournalCode, BsCalculator, BsSpeedometer2 } from "react-icons/bs"
import { RxDrawingPin } from "react-icons/rx"
import { FaFileInvoiceDollar } from "react-icons/fa"

const color = "#1e81b0"
const Size = 70
const servicesData = [
  {
    id: 1,
    url: "youtube-tags",
    icon: <AiOutlineTags color={color} size={Size} />,
    title: "Youtube Tags Extractor",
    working:
      "Youtube Tags Extractor is a free online tool developed to extract youtube tags from any youtube video along with the URL. This online tool can be useful to get the target list of tags .",
    usesteps: [
      {
        no: "01",
        title: "Step One",
        text: "You have to get desired <strong>YouTube Video link</strong> and <strong> Paste </strong> it into the above input field"
      },
      {
        no: "02",
        title: "Step two",
        text: "Click <strong>Get Tags</strong> Button"
      },
      {
        no: "03",
        title: "Step three",
        text: "If you get tags click <strong>Copy All</strong> Button If you want to copy all tags"
      },
      {
        no: "04",
        title: "Step three",
        text: "Click <strong>On Tag</strong> If you want to copy that specific tag"
      },
      {
        no: "05",
        title: "Step three",
        text: "Click <strong> X </strong> Button If you want to remove that specific tag"
      }
    ]
  },
  // {
  //   id: 21,
  //   url: "youtube-tags-generator",
  //   icon: <TfiYoutube color={color} size={Size} />,
  //   title: "Youtube Tags Generator"
  // },
  {
    id: 20,
    icon: <CgTranscript color={color} size={Size} />,
    url: "youtube-transcript",
    title: "YouTube Transcript",
    usesteps: [
      {
        no: "01",
        title: "Step One",
        text: "You have to get desired <strong>YouTube Video link</strong> and <strong> Paste </strong> it into the above input field"
      },
      {
        no: "02",
        title: "Step two",
        text: "Click <strong>Get Transcript</strong> Button"
      },
      {
        no: "03",
        title: "Step three",
        text: "If you get transcript of video you can use it"
      }
    ]
  },
  {
    id: 18,
    icon: <GiDuration color={color} size={Size} />,
    url: "script-video-duration",
    title: "Script Video Duration",
    usesteps: [
      {
        no: "01",
        title: "Step One",
        text: "Enter the text in above input field"
      },
      {
        no: "02",
        title: "Step two",
        text: "Click <strong> Calculate </strong> Button"
      },
      {
        no: "03",
        title: "Step three",
        text: "You can <strong> Increase </strong> and <strong> Decrease </strong> the speed to move the slider"
      }
    ]
  },
  {
    id: 15,
    icon: <BsJournalCode color={color} size={Size} />,
    url: "get-webpage-source-code",
    title: "WebPage Source Code",
    usesteps: [
      {
        no: "01",
        title: "Step One",
        text: "Enter the <strong>WebPage Url/Link </strong> in the above input field"
      },
      {
        no: "02",
        title: "Step two",
        text: "Click <strong> Get </strong> Button"
      },
      {
        no: "03",
        title: "Step three",
        text: "You can <strong> Copy Source Code </strong> of the web page by clicking <strong> Copy Icon </strong>"
      }
    ]
  },
  {
    id: 6,
    icon: <MdOutlineTimer color={color} size={Size} />,
    url: "webpage-load-time-checker",
    title: "WebPage Load Time Checker",
    usesteps: [
      {
        no: "01",
        title: "Step One",
        text: "Enter the <strong>WebPage Url/Link </strong> in the above input field"
      },
      {
        no: "02",
        title: "Step two",
        text: "Click <strong> Calculate </strong> Button"
      }
    ]
  },
  {
    id: 7,
    icon: <AiOutlineFileSearch color={color} size={Size} />,
    url: "domain-availability",
    title: "Domain Availability Checker",
    usesteps: [
      {
        no: "01",
        title: "Step One",
        text: "Enter <strong>Just Domain Name </strong> in the above input field"
      },
      {
        no: "02",
        title: "Step two",
        text: "Enter desired <strong>Extension e.g. .com, .net, .org </strong> in the above right side input field"
      }
    ]
  },
  {
    id: 9,
    icon: <MdImageSearch color={color} size={Size} />,
    url: "image-downloader",
    title: "Online Image Downloader"
  },
  {
    id: 3,
    icon: <RiImageAddLine color={color} size={Size} />,
    url: "make-your-event",
    title: "Make Your Event"
  },
  {
    id: 2,
    url: "color-picker",
    icon: <RxDrawingPin color={color} size={Size} />,
    title: "Image Color Picker",
    usesteps: [
      {
        no: "01",
        title: "Step One",
        text: "You have to get desired <strong>Image Url/link</strong> Or  You can <strong> Upload </strong> an image from your device as well and <strong> Paste </strong> it into the above input field"
      },
      {
        no: "02",
        title: "Step two",
        text: "Copy to Clipboard (<strong>hex color code</strong>)  when you click on the color Box"
      },
      {
        no: "03",
        title: "Step three",
        text: "Get Image <strong> specific color </strong> to click anywhere on the Image"
      }
    ]
  },
  {
    id: 17,
    icon: <FaFileInvoiceDollar color={color} size={Size} />,
    url: "invoice-generator",
    title: "Invoice Generator",
    usesteps: [
      {
        no: "01",
        title: "Step One",
        text: "Fill the desired input fields"
      },
      {
        no: "02",
        title: "Step two",
        text: "You have to fill Item <strong>Description, Quantity, Price </strong> to add Table Item"
      },
      {
        no: "03",
        title: "Step three",
        text: "Clik <strong> Print/Download </strong> Button to click print/download the Invoice"
      }
    ]
  },
  {
    id: 14,
    icon: <AiOutlineMail color={color} size={Size} />,
    url: "emails-extractor",
    title: "Emails Extractor",
    usesteps: [
      {
        no: "01",
        title: "Step One",
        text: "Paste the text"
      },
      {
        no: "02",
        title: "Step two",
        text: "You have to fill Item <strong>Description, Quantity, Price </strong> to add Table Item"
      },
      {
        no: "03",
        title: "Step three",
        text: "Clik <strong> Print/Download </strong> Button to click print/download the Invoice"
      }
    ]
  },

  {
    id: 11,
    icon: <AiOutlineQrcode color={color} size={Size} />,
    url: "qr-code-generator",
    title: "QR Code Generator"
  },
  {
    id: 12,
    icon: <AiOutlineScan color={color} size={Size} />,
    url: "qr-code-scanner",
    title: "QR Code Scanner"
  },
  {
    id: 8,
    icon: <AiOutlineFileWord color={color} size={Size} />,
    url: "text-counter",
    title: "Text Counter"
  },
  {
    id: 19,
    icon: <BsCalculator color={color} size={Size} />,
    url: "vat-calculator",
    title: "VAT Calculator"
  },
  {
    id: 4,
    icon: <BsSpeedometer2 color={color} size={Size} />,
    url: "internet-speed-checker",
    title: "Internet Speed Checker"
  }
]

export default servicesData
