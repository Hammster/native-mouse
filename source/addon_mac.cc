#include "mouse_mac.h"

void Initialize(Local<Object> exports)
{
	Mouse::Initialize(exports);
}

NODE_MODULE(native_mouse, Initialize)
