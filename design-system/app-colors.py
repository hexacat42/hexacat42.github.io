# Poetry Cam — "Poetic Print" tokens for the PyQt5 camera app.
# Drop-in replacement for the _COLORS dict in
# src/poetry_cam/ui/screens/shell.py. Keep the app's generous touch radii
# (14-24px); only the palette and the poem font (-> serif) change.

_COLORS = {
    # neutrals — warm printed paper
    "bg":           "#e7e1d4",   # page ground
    "surface":      "#fbf8f2",   # cards / panels
    "surface_alt":  "#f1ebdd",   # poem surface / inset
    "text":         "#1c1a15",   # ink
    "muted":        "#6b6154",   # muted text
    "line":         "#d8cfbe",   # hairline borders on paper

    # accent — patent-stamp oxblood
    "accent":       "#9d3b2f",

    # header — ink band (was navy)
    "header_bg":    "#1c1a15",
    "header_text":  "#fbf8f2",

    # semantic
    "warning":      "#b5852a",
    "success":      "#4f7a3f",
    "error":        "#b1442f",

    # controls
    "disabled_bg":   "#cfc6b6",
    "disabled_text": "#8a8073",
    "footer_bg":     "#e7e1d4",
    "power":         "#b1442f",   # power/abort red, tuned warm
}

# Fonts:
#   poem text      -> serif  (QFont family "Georgia" / "DejaVu Serif" fallback)
#   UI / buttons   -> sans   (existing "DejaVu Sans")
#   timestamps/IDs -> monospace ("DejaVu Sans Mono")
#
# e.g. in the poem label:
#   poem_label.setFont(QFont("DejaVu Serif", 15))
# and the app default stays:
#   qt_app.setFont(QFont("DejaVu Sans", 10))
