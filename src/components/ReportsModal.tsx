import React, { useState } from 'react';
import { X, FileText, CheckCircle2, Download, Copy, Check, BarChart2, Calendar, User, ExternalLink, ShieldCheck } from 'lucide-react';
import { VERIFIED_REPORTS, SeoReportItem } from '../data/portfolio-data.ts';

interface ReportsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialReportId?: string;
}

export const ReportsModal: React.FC<ReportsModalProps> = ({
  isOpen,
  onClose,
  initialReportId
}) => {
  const [selectedReportId, setSelectedReportId] = useState<string>(
    initialReportId || VERIFIED_REPORTS[0].id
  );
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentReport = VERIFIED_REPORTS.find(r => r.id === selectedReportId) || VERIFIED_REPORTS[0];

  const handleCopySummary = () => {
    const text = `# ${currentReport.title}\nAuthor: ${currentReport.author}\nDate: ${currentReport.date}\nScope: ${currentReport.scope}\n\n## Executive Summary\n${currentReport.executiveSummary}\n\n## Key Metrics\n${currentReport.keyMetrics.map(m => `- ${m.label}: ${m.value} (${m.note})`).join('\n')}\n\n## Key Findings\n${currentReport.keyFindings.map(f => `- ${f}`).join('\n')}\n\n## Action Items\n${currentReport.actionItems.map(a => `- ${a}`).join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reports-modal-title"
    >
      <div className="relative bg-white rounded-2xl border border-[#D8CECA] max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#D8CECA] bg-[#FBF8F6]">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-sans text-[#641E32] font-semibold uppercase">
              <ShieldCheck className="w-4 h-4 text-[#B59A62]" />
              <span>VERIFIED SEO REPORT DOSSIER · WErize &amp; PORTFOLIO AUDITS</span>
            </div>
            <h2 id="reports-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-[#1C1517]">
              Accommodated SEO Audit &amp; Performance Reports
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#66585B] hover:text-[#1C1517] hover:bg-[#F4EBEB] rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Left sidebar report selector + Right report content */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          
          {/* Left Column: Report Navigation List */}
          <div className="md:col-span-4 border-r border-[#D8CECA] bg-[#FBF8F6] p-3 space-y-1 overflow-y-auto max-h-[30vh] md:max-h-full">
            <span className="text-[11px] font-sans text-[#66585B] font-semibold uppercase px-3 py-1 block">
              Available Reports ({VERIFIED_REPORTS.length})
            </span>

            {VERIFIED_REPORTS.map((report) => (
              <button
                key={report.id}
                type="button"
                onClick={() => setSelectedReportId(report.id)}
                className={`w-full text-left p-3 rounded-lg text-xs font-sans transition-all flex flex-col gap-1 ${
                  selectedReportId === report.id
                    ? 'bg-[#641E32] text-white shadow-xs'
                    : 'text-[#1C1517] hover:bg-[#F4EBEB]'
                }`}
              >
                <span className="font-bold font-serif text-sm leading-snug line-clamp-2">
                  {report.title}
                </span>
                <span className={`text-[10px] ${selectedReportId === report.id ? 'text-zinc-200' : 'text-[#66585B]'}`}>
                  {report.date} · {report.format}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Selected Report Detailed Dossier */}
          <div className="md:col-span-8 p-6 overflow-y-auto space-y-6">
            
            {/* Report Header Metadata */}
            <div className="space-y-2 pb-4 border-b border-[#E8E1DE]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-sans font-semibold text-[#641E32] bg-[#F4EBEB] px-2.5 py-1 rounded border border-[#B98C91]/30">
                  {currentReport.format}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-medium text-[#1C1517] bg-white border border-[#D8CECA] hover:bg-[#F4EBEB] rounded transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#66585B]" />}
                    <span>{copied ? 'Copied Markdown' : 'Copy Summary'}</span>
                  </button>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#1C1517]">
                {currentReport.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#66585B] pt-1">
                <div><strong>Author:</strong> {currentReport.author}</div>
                <div><strong>Date:</strong> {currentReport.date}</div>
                <div className="sm:col-span-2"><strong>Scope:</strong> {currentReport.scope}</div>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="space-y-2">
              <h4 className="font-sans text-xs font-bold text-[#641E32] uppercase tracking-wider">
                Executive Summary
              </h4>
              <p className="text-sm text-[#1C1517] leading-relaxed bg-[#FBF8F6] p-4 rounded-lg border border-[#E8E1DE]">
                {currentReport.executiveSummary}
              </p>
            </div>

            {/* Key Verified Metrics Grid */}
            <div className="space-y-3">
              <h4 className="font-sans text-xs font-bold text-[#641E32] uppercase tracking-wider">
                Key Metrics &amp; Benchmarks
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {currentReport.keyMetrics.map((metric, idx) => (
                  <div key={idx} className="p-3 bg-[#FBF8F6] rounded-lg border border-[#E8E1DE] space-y-1">
                    <span className="text-[11px] font-sans text-[#66585B] block">{metric.label}</span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#1C1517] block">{metric.value}</span>
                    <span className="text-[11px] text-[#641E32] font-medium block">{metric.note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Findings List */}
            <div className="space-y-2">
              <h4 className="font-sans text-xs font-bold text-[#641E32] uppercase tracking-wider">
                Audit Findings &amp; Observations
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#1C1517]">
                {currentReport.keyFindings.map((finding, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Items & Recommendations */}
            <div className="space-y-2">
              <h4 className="font-sans text-xs font-bold text-[#641E32] uppercase tracking-wider">
                Recommendations &amp; Deliverables
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#66585B]">
                {currentReport.actionItems.map((action, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#641E32] shrink-0 mt-1.5" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#D8CECA] bg-[#FBF8F6] flex flex-wrap items-center justify-between gap-3 text-xs text-[#66585B]">
          <span>Verified report artifacts accommodated from original PDF and GSC documentation.</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#641E32] text-white hover:bg-[#461423] rounded font-sans font-medium transition-colors"
          >
            Close Report Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
