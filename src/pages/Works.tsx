import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { categories, projects, type Project } from "@/data/works-data";
import { metaData } from "@/config";

function ProjectDrawer({ project }: { project: Project }) {
  return (
    <div className="pt-3 pb-4 border-b border-[#e0e0e0]">
      <p className="text-sm text-[#444444] leading-relaxed mb-4">
        {project.description}
      </p>

      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-[#999999] border border-[#e0e0e0] rounded px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {project.notes && project.notes.length > 0 && (
        <div className="flex flex-wrap gap-x-6 gap-y-1 mb-4">
          {project.notes.slice(0, 3).map((note) => (
            <div key={note.label} className="flex items-baseline gap-1.5">
              <span className="text-xs text-[#bbbbbb]">{note.label}</span>
              <span className="text-xs text-[#666666]">{note.value}</span>
            </div>
          ))}
        </div>
      )}

      <Link
        to={`/works/${project.slug}`}
        className="text-xs text-[#666666] hover:text-[#111111] transition-colors underline decoration-[#dddddd] underline-offset-2 hover:decoration-[#999999]"
      >
        Read more →
      </Link>
    </div>
  );
}

const populatedCategories = categories.filter(({ key }) =>
  projects.some((p) =>
    Array.isArray(p.category) ? p.category.includes(key) : p.category === key,
  ),
);

function WorksList() {
  const [activeTab, setActiveTab] = useState(populatedCategories[0]?.key ?? "");
  const [open, setOpen] = useState<string | null>(null);

  const visibleProjects = projects
    .filter((p) =>
      Array.isArray(p.category)
        ? p.category.includes(activeTab)
        : p.category === activeTab,
    )
    .sort((a, b) => b.year - a.year);

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {populatedCategories.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => {
              setActiveTab(key);
              setOpen(null);
            }}
            className={`text-xs font-medium tracking-widest uppercase transition-colors ${
              activeTab === key
                ? "text-[#111111]"
                : "text-[#bbbbbb] hover:text-[#666666]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Project list */}
      <div>
        {visibleProjects.map((project) => {
          const isOpen = open === project.slug;
          return (
            <div key={project.slug} className="border-t border-[#e0e0e0]">
              <button
                onClick={() => setOpen(isOpen ? null : project.slug)}
                className="w-full flex items-baseline justify-between py-2.5 group text-left"
              >
                <span className="text-sm text-[#111111] group-hover:text-[#666666] transition-colors">
                  {project.title}
                </span>
                <span className="text-xs text-[#bbbbbb] ml-4 shrink-0">
                  {project.year}
                </span>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <ProjectDrawer project={project} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Works() {
  return (
    <section>
      <Helmet>
        <title>Works | {metaData.name}</title>
        <meta name="description" content="Selected projects and work." />
      </Helmet>
      <h1 className="mb-8 text-sm font-medium tracking-widest uppercase text-[#666666]">
        Selected Works
      </h1>
      <p className="text-sm text-[#999999]">Coming soon.</p>
    </section>
  );
}
