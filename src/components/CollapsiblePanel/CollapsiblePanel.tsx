import "./CollapsiblePanel.css"

export function CollapsiblePanel({
  title,
  subtitle,
  defaultOpen = false,
  children,
}: {
  title: string;
  subtitle?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  return (
    <details className="panel cpanel" open={defaultOpen}>
      <summary className="cpanel__summary">
        <div className="cpanel__titles">
          <h2 className="panel-title">{title}</h2>
          {subtitle && <p className="panel-subtitle">{subtitle}</p>}
        </div>

        <span className="cpanel__chev" aria-hidden="true">▾</span>
      </summary>

      <div className="cpanel__content">
        {children}
      </div>
    </details>
  );
}