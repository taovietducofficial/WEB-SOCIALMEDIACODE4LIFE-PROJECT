import base64

encoded = "dGhhb2R1eWVuMTIz"
decoded = base64.b64decode(encoded).decode('utf-8')
print(f"Decoded password: {decoded}")
