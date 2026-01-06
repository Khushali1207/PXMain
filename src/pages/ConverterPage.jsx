import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { 
  FileUp, FileText, Presentation, FileCode, 
  ArrowRight, Loader2, CheckCircle2, Download, RefreshCcw 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ConverterPage = () => {
  const [file, setFile] = useState(null);
  const [converting, setConverting] = useState(false);
  const [converted, setConverted] = useState(false);

  // File drop logic
  const onDrop = useCallback((acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setConverted(false);
      toast.success(`${uploadedFile.name} uploaded!`);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.ms-powerpoint': ['.ppt', '.pptx'],
      'application/msword': ['.doc', '.docx']
    }
  });

  const handleConvert = () => {
    if (!file) return toast.error("Pehle file toh select karo!");
    
    setConverting(true);
    // Fake processing for 3 seconds
    setTimeout(() => {
      setConverting(false);
      setConverted(true);
      toast.success("Conversion Successful! 🚀");
    }, 3000);
  };

  return (
    <div className="min-h-screen py-32 bg-transparent text-white relative overflow-hidden flex flex-col items-center">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 text-gradient-primary">Universal Converter</h1>
          <p className="text-gray-400">Convert any document to print-ready PDF in seconds.</p>
        </div>

        {/* --- MAIN CONVERTER CARD --- */}
        <div className="glass rounded-[3rem] p-8 md:p-12 border border-white/10 shadow-2xl">
          
          {!converted ? (
            <div className="space-y-8">
              {/* Dropzone */}
              <div 
                {...getRootProps()} 
                className={`border-2 border-dashed rounded-[2rem] p-16 transition-all cursor-pointer flex flex-col items-center text-center
                  ${isDragActive ? 'border-primary bg-primary/5 scale-95' : 'border-white/10 hover:border-primary/50'}`}
              >
                <input {...getInputProps()} />
                <div className="w-20 h-20 glass rounded-full flex items-center justify-center mb-6 text-primary glow-primary">
                  <FileUp className="w-10 h-10" />
                </div>
                {file ? (
                  <div>
                    <p className="text-xl font-bold text-white mb-2">{file.name}</p>
                    <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-xl font-bold text-white mb-2">Drag & Drop or Click to Upload</p>
                    <p className="text-sm text-gray-400 font-mono tracking-widest uppercase">PPT, DOCX, or PDF</p>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <Button 
                onClick={handleConvert}
                disabled={!file || converting}
                className="w-full h-20 text-2xl font-black rounded-[1.5rem] bg-primary text-black hover:scale-[1.02] transition-all glow-primary"
              >
                {converting ? (
                  <><Loader2 className="mr-3 animate-spin w-8 h-8" /> Converting...</>
                ) : (
                  <>Convert to Print-Ready PDF <ArrowRight className="ml-3" /></>
                )}
              </Button>
            </div>
          ) : (
            /* --- SUCCESS STATE --- */
            <div className="text-center py-10 animate-in zoom-in duration-300">
              <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Conversion Complete!</h2>
              <p className="text-gray-400 mb-10">Your file is now optimized for the PX Printing Engine.</p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button className="h-16 px-10 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-all">
                  <Download className="mr-2 w-5 h-5" /> Download PDF
                </Button>
                <Button 
                  onClick={() => {setFile(null); setConverted(false);}}
                  variant="outline" 
                  className="h-16 px-10 glass border-white/10 rounded-2xl hover:bg-white/5"
                >
                  <RefreshCcw className="mr-2 w-5 h-5" /> Convert Another
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* --- FORMATS SUPPORTED --- */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-50">
          <div className="flex items-center gap-2 font-mono text-sm tracking-widest uppercase">
            <Presentation className="w-5 h-5" /> PowerPoint
          </div>
          <div className="flex items-center gap-2 font-mono text-sm tracking-widest uppercase">
            <FileText className="w-5 h-5" /> MS Word
          </div>
          <div className="flex items-center gap-2 font-mono text-sm tracking-widest uppercase">
            <FileCode className="w-5 h-5" /> PDF/X-4
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConverterPage;